<?php include('src/includes/header.php'); ?>
<body data-spy="scroll" data-target="#navEl">
<div>
    <div id="Home" class="cover" data-src="/images/background.jpg" data-position="bottom right">
        <?php include('src/home.php'); ?>
    </div>
    <div id="Profile" class="profileDiv">
        <div class="masthead">
            <?php include('src/includes/nav.php'); ?>
        </div>
        <?php include('src/profile.php'); ?>
    </div>
    <div id="Resume" class="resumeDiv">
        <?php include('src/resume.php'); ?>
    </div>
    <div id="Skills" class="skillsDiv">
        <?php include('src/skills.php'); ?>
    </div>
    <div id="Contact" class="contactDiv">
        <?php include('src/contact.php'); ?>
    </div>
</div>
</body>
<?php include('src/includes/footer.php'); ?>
