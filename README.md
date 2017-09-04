# Wikipedia-Viewer

# The Project

Allows the user to either be linked to a random Wikipedia article or search Wikipedia and be returned search results based on their input. Once the user has submitted their search request, the page loads the top 10 results detailing the title, a short text overview on that topic as well as a link for the users to click through to the main Wikipedia page.</p>

# The Logic

The basic layout and responsive design is aided by the use of Bootstrap. The handling of the search results is through JavaScript and jQuery. Once the users clicks submit or hits enter, a variable is created which holds the value of the text input box. We then make a call to the Wikipedia API with a getJSON call which responds with the data we need.</p>

With the data returned we then use jQuery's html() method to clear the output ul's contents by setting it to an empty string. We then loop over the JSON data and append a new li item to the page for each search result returned by Wikipedia. Users can search as many times as they want and get updated content without having to refresh the page.</p>

Created in May 2017