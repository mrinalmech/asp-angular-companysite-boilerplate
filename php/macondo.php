<?php
$request_url = 'https://campaigns.zoho.com/api/xml/listsubscribe';

$ch = curl_init();
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);

$request_parameters = array(
    'authtoken' => '53f20b13a9a1dbc8c5ac92056d5aaddc',
    'scope' => 'CampaignsAPI',
    'listkey' => '4779493ae3046ad0e9b34976dc26ece6f6c92269fb64284d',
    'contactinfo' => '<xml><fl val="First Name">' . ($_POST["name"]) . '</fl><fl val="Contact Email">' . ($_POST["email"]) . '</fl></xml>'
);
curl_setopt($ch, CURLOPT_POST, TRUE);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($request_parameters));


/* Setting the Response Content Type to XML */
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Accept: application/xml'
));

/* Curling the request URL */
curl_setopt($ch, CURLOPT_URL, $request_url);

/* Getting the request header */
curl_setopt($ch, CURLOPT_HEADER, TRUE);

/* Connecting Curl to an API server through HTTPS */
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

/* Getting the response */
$response = curl_exec($ch);

/* Get curl infos */
$response_info = curl_getinfo($ch);

/* Closing curl */
curl_close($ch);

/* Getting the response body */
$response_body = substr($response, $response_info['header_size']);

// Response HTTP Status Code
echo "Response HTTP Status Code : ";
echo $response_info['http_code'];
echo "\n";
// Response Body
echo "Response Body : ";
echo $response_body;
?>