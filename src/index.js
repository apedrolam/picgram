var page = require('page');
var yo = require('yo-yo');
var empty = require('empty-element');

var main = document.getElementById('main-container');

page('/', function(ctx, next) {
    main.innerHTML = 'Home <a href="/signup">Signup</a>';
})

page('/signup', function(ctx, next) {
    var el = yo`<div class="container">
        <div class="row">
            <div class="col s10 push-s1">
                <div class="row">
                    <div class="col m5 hide-on-small-only">
                        <img src="iphone.png" class="iphone" alt="Logo-iphone">
                    </div>
                    <div class="col s12 m7">
                        <div class="row">
                            <div class="signup-box">
                                <h1 class="picgram">Picgram</h1>
                                <form class="signup-form">
                                    <h2>Sign Up to see pics of your friends</h2>
                                    <div class="section">
                                        <a href="" class="btn btn-fb hide-on-small-only">Sign In with Facebook</a>
                                        <a href="" class="btn btn-fb hide-on-med-and-up">Sign In</a>
                                    </div>
                                    <div class="divider"></div>
                                    <div class="section">
                                        <input type="email" name="email" placeholder="Email" />
                                        <input type="text" name="name" placeholder="Name" />
                                        <input type="text" name="username" placeholder="Username" />
                                        <input type="password" name="password" placeholder="Password" />
                                        <button class="btn waves-effect waves-light btn-signup" type="submit">Sign Up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="row">
                            <div class="login-box">
                                Have an account? <a href="/signin">Enter</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

    empty(main).appendChild(el);
})

page();