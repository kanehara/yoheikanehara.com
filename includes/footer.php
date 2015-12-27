        <div class="mastfoot">
            <span class="glyphicon glyphicon-envelope" aria-hidden="true">
                kanehara@umich.edu
            </span>
        </div>
    </div>
    <footer>
        <script src="js/jquery-2.1.4.min.js"></script>
        <script src="https://github.com/kswedberg/jquery-smooth-scroll/blob/master/jquery.smooth-scroll.min.js"></script>
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
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous">
        </script>
        <script src="js/nav.js"></script>
    </footer>
</body>
</html>
