<?php
require_once __DIR__ . '/../utils.php';
require_once __DIR__ . '/../db.php';

require_method('GET');
$userId = require_auth();
$pdo = get_pdo();
$stmt = $pdo->prepare('SELECT g.id, g.name, u.name AS owner_name,
    (SELECT COUNT(*) FROM study_group_members gm WHERE gm.group_id = g.id) AS members_count
    FROM study_groups g
    JOIN users u ON u.id = g.owner_id
    WHERE EXISTS (SELECT 1 FROM study_group_members gm WHERE gm.group_id = g.id AND gm.user_id = ?)
    ORDER BY g.id DESC');
$stmt->execute([$userId]);
$groups = $stmt->fetchAll();
send_json(['groups' => $groups]);
?>

