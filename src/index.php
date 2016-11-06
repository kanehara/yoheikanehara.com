<?php include('includes/header.php'); ?>
<body data-spy="scroll" data-target="#navEl">
<div>
    <div id="Home" class="cover" data-src="/images/background.jpg" data-position="bottom right">
        <?php include('home.php'); ?>
    </div>
    <div id="Profile" class="profileDiv">
        <div class="masthead">
            <?php include('includes/nav.php'); ?>
        </div>
        <?php include('profile.php'); ?>
    </div>
    <div id="Resume" class="resumeDiv">
        <?php include('resume.php'); ?>
    </div>
    <div id="Skills" class="skillsDiv">
        <?php include('skills.php'); ?>
    </div>
<!--
    <div id="Portfolio" class="portDiv">
        <?php include('port.php'); ?>
    </div>
-->
    <div id="Contact" class="contactDiv">
        <?php include('contact.php'); ?>
    </div>
</div>
</body>
<?php include('includes/footer.php'); ?>
