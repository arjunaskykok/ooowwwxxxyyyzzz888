# README

Install Rails and other things like Sqlite, Node, etc.

Run the app like this:

* git clone app_url

* cd app_url

* Run the `rails db:migrate` command on the terminal

* Run the `rails db:seed` command on the terminal

* Run the `rails server` command on the terminal

* Open htttp://localhost:3000

* Enjoy!

Big architectural decisions I've made:

* Using websockets for pushing real-time updates

* Using event dispatcher to bridge between vanilla JS and React

* Using SVG for stars instead of unicode or PNG because manipulating SVG
  is easier

* Avoiding Redux because it's not needed


After working on the challenge, I think next time I would use TypeScript. Then I would use UUID instead of ID. Finally, I would use a slug on the URL.
