<?php

$url = 'world_universities_and_domains.json'; // path to your JSON file
$data = file_get_contents($url); // put the contents of the file into a variable
$universities = json_decode($data); // decode the JSON feed
$unis = array();
$i = 0;

foreach ($universities as $university) {
    if (strcasecmp($university->country, 'canada') == 0) {
        $unis[$i] = $university->name;
        $i++;
    }
}

$random = rand(0, sizeof($unis)-1);

echo $unis[$random];

