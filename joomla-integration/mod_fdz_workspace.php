<?php
/**
 * @package     Joomla.Administrator
 * @subpackage  mod_fdz_workspace
 *
 * @copyright   (C) 2024 FDZ-Gesundheit
 * @license     GNU General Public License version 2 or later
 */

defined('_JEXEC') or die;

use Joomla\CMS\Helper\ModuleHelper;

// Parameter aus Modul-Konfiguration
$workspaceUrl = $params->get('workspace_url', 'https://ihre-nextjs-domain.de');
$height = $params->get('iframe_height', '1200');
$showTitle = $params->get('show_title', 1);
$moduleclass_sfx = htmlspecialchars($params->get('moduleclass_sfx', ''));

// Optional: CSS-Klasse für zusätzliches Styling
$cssClass = 'fdz-workspace-module ' . $moduleclass_sfx;
?>

<div class="<?php echo $cssClass; ?>">
  <?php if ($showTitle) : ?>
    <h3 class="fdz-workspace-title">
      <?php echo $module->title; ?>
    </h3>
  <?php endif; ?>
  
  <div class="fdz-workspace-container">
    <iframe 
      src="<?php echo htmlspecialchars($workspaceUrl); ?>" 
      width="100%" 
      height="<?php echo (int)$height; ?>px" 
      frameborder="0"
      scrolling="auto"
      allowfullscreen
      style="border: none; display: block;">
    </iframe>
  </div>
</div>

<style>
  .fdz-workspace-module {
    margin: 20px 0;
  }
  
  .fdz-workspace-title {
    margin-bottom: 15px;
    font-size: 1.5em;
    color: #1e293b;
  }
  
  .fdz-workspace-container {
    position: relative;
    width: 100%;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .fdz-workspace-container iframe {
    min-height: 800px;
  }
  
  @media (max-width: 768px) {
    .fdz-workspace-container iframe {
      height: 1000px !important;
    }
  }
  
  @media (max-width: 480px) {
    .fdz-workspace-container iframe {
      height: 800px !important;
    }
  }
</style>


