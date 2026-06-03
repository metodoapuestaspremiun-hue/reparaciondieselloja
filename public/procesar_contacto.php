<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://reparaciondieselloja.com');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Manejar preflight OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit;
}

// Configuración del correo
$smtp_host = 'mail.reparaciondieselloja.com';
$smtp_username = 'email@reparaciondieselloja.com';
$smtp_password = 'F^8aAwH.N1Hy';
$destinatario = 'email@reparaciondieselloja.com';

function limpiarDato($dato) {
    return htmlspecialchars(strip_tags(trim($dato)));
}

try {
    // Recibir datos JSON
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    
    if (json_last_error() !== JSON_ERROR_NONE) {
        throw new Exception('Datos JSON inválidos');
    }

    // Validar datos
    $name = isset($data['name']) ? limpiarDato($data['name']) : '';
    $phone = isset($data['phone']) ? limpiarDato($data['phone']) : '';
    $issue = isset($data['issue']) ? limpiarDato($data['issue']) : '';
    $brand = isset($data['brand']) ? limpiarDato($data['brand']) : '';
    $dateTime = isset($data['dateTime']) ? limpiarDato($data['dateTime']) : '';

    $errores = [];
    if (empty($name)) $errores[] = 'El nombre es obligatorio';
    if (empty($phone)) $errores[] = 'El teléfono es obligatorio';
    if (empty($issue)) $errores[] = 'La descripción del problema es obligatoria';
    if (empty($brand)) $errores[] = 'La marca del vehículo es obligatoria';
    if (empty($dateTime)) $errores[] = 'La fecha y hora son obligatorias';

    if (!empty($errores)) {
        echo json_encode(['success' => false, 'message' => implode(', ', $errores)]);
        exit;
    }

    // Formatear fecha
    $fechaFormateada = date('d/m/Y H:i', strtotime($dateTime));

    // Contenido del email
    $asunto = "Nueva Solicitud de Cita - $brand - $name";
    $cuerpo_email = "
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='UTF-8'>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #ec0018; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background-color: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; padding: 15px; background-color: white; border-left: 4px solid #ec0018; border-radius: 4px; }
            .label { font-weight: bold; color: #ec0018; margin-bottom: 5px; }
            .value { color: #333; font-size: 16px; }
            .urgent { background-color: #fff3cd; border-color: #ffc107; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>🔧 Nueva Solicitud de Cita</h2>
                <p><strong>Reparación Diesel Loja</strong></p>
                <p>Recibido: " . date('d/m/Y H:i:s') . "</p>
            </div>
            
            <div class='content'>
                <div class='field'>
                    <div class='label'>👤 Cliente:</div>
                    <div class='value'>$name</div>
                </div>
                
                <div class='field'>
                    <div class='label'>📞 Teléfono:</div>
                    <div class='value'>$phone</div>
                </div>
                
                <div class='field'>
                    <div class='label'>🚗 Marca del Vehículo:</div>
                    <div class='value'>$brand</div>
                </div>
                
                <div class='field urgent'>
                    <div class='label'>⚠️ Problema Reportado:</div>
                    <div class='value'>" . nl2br($issue) . "</div>
                </div>
                
                <div class='field'>
                    <div class='label'>📅 Fecha y Hora Solicitada:</div>
                    <div class='value'>$fechaFormateada</div>
                </div>
            </div>
        </div>
    </body>
    </html>";

    // Headers del email
    $headers = "From: $smtp_username\r\n";
    $headers .= "Reply-To: $phone\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Enviar email
    if (mail($destinatario, $asunto, $cuerpo_email, $headers)) {
        echo json_encode([
            'success' => true, 
            'message' => 'Solicitud enviada exitosamente. Te contactaremos pronto.'
        ]);
    } else {
        throw new Exception('Error al enviar el email');
    }

} catch (Exception $e) {
    echo json_encode([
        'success' => false, 
        'message' => 'Error al procesar la solicitud: ' . $e->getMessage()
    ]);
}
?>
