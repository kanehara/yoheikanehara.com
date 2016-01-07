<footer>
    <script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
    <script type="text/javascript" src="js/jquery.smooth-scroll.js"></script>
    <script>
            $('.smooth').on('click', function() {
                        $.smoothScroll({
                                        scrollElement: $('body'),
                    scrollTarget: '#' + this.id
                        });
                            
                            return false;
            });
    </script>
    <!-- Latest compiled and minified JavaScript -->
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/script.js"></script>
</footer>
</html>
