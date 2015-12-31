<?php include('includes/header.php'); ?> 
<div style="background-color: #333;">
    <div class="masthead">
        <?php include('includes/nav.php'); ?>
    </div>
    <div id="home" class="cover" data-position="center center">
        <div class="container">
            <?php include('home.php'); ?>
        </div>
    </div>
    <div id="profile" class="profileDiv">
        <div class="container">
            <div class="profileDiv">
                <?php include('profile.php'); ?>
             </div>
        </div>
    </div>
    <div id="experience" class="expDiv">
        <div class="container">
            <div class="experienceDiv">
                <?php include('exp.php'); ?>
            </div>
        </div>
    </div>
    <div id="skills" class="skillsDiv">
        <div class="container">
            <div class="skillsDiv">
                <?php include('skills.php'); ?>
            </div>
        </div>
    </div>
    <div id="portfolio" class="portDiv">
        <div class="container">
            <div class="portfolioDiv">
                <?php include('port.php'); ?>
            </div>
        </div>
    </div>
    <div id="contact" class="contactDiv">
        <div class="container">
            <span class="glyphicon glyphicon-envelope" aria-hidden="true">
            </span>
            kanehara@umich.edu
        </div>
    </div>
</div>
<?php include('includes/footer.php'); ?>
