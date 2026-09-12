<?php
$url = 'https://raw.githubusercontent.com/kaghohop-gif/chk/refs/heads/main/funtime-chk.bat';
$filename = 'funtime-chk.bat';

$data = file_get_contents($url);
if ($data === false) {
    http_response_code(502);
    exit('Ошибка загрузки файла');
}

header('Content-Type: application/octet-stream');
header('Content-Disposition: attachment; filename="' . $filename . '"');
header('Content-Length: ' . strlen($data));
header('Cache-Control: no-cache');

echo $data;
