<?php include('includes/header.php'); ?> 
<body style="font-weight: 300; background-color:#333;" data-spy="scroll" data-target="#navHeader">
<div> 
    <div id="home" class="cover" data-src="/images/background.jpg" data-position="bottom right">
        <?php include('home.php'); ?>
    </div>
    <div id="profile" class="profileDiv">
        <div class="masthead">
            <?php include('includes/nav.php'); ?>
        </div>
        <?php include('profile.php'); ?>
    </div>
    <div id="resume" class="resumeDiv">
        <?php include('resume.php'); ?>
    </div>
    <div id="skills" class="skillsDiv">
        <?php include('skills.php'); ?>
    </div>
    <div id="portfolio" class="portDiv">
        <?php include('port.php'); ?>
    </div>
    <div id="contact" class="contactDiv">
        <div class="container">
            <span class="glyphicon glyphicon-envelope" aria-hidden="true">
            </span>
            kanehara@umich.edu
        </div>
    </div>
</div>
</body>
<?php include('includes/footer.php'); ?>
