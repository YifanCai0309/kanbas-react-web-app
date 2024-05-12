export default function Lists() {
  return (
    <div id="wd-lists">
      <h4>List Tags</h4>
      <h5>Ordered List Tag</h5>
      How to make pancakes:
      <ol id="wd-pancakes">
        <li>Mix dry ingredients.</li>
        <li>Add wet ingredients.</li>
        <li>Stir to combine.</li>
        <li>Heat a skillet or griddle.</li>
        <li>Pour batter onto the skillet.</li>
        <li>Cook until bubbly on top.</li>
        <li>Flip and cook the other side.</li>
        <li>Serve and enjoy!</li>
      </ol>
      My favorite recipe:
      <ol id="wd-your-favorite-recipe">
        {/* complete on your own */}
        <li>Preheat your oven to 475°F.</li>
        <li>Prepare a pizza dough on a baking sheet.</li>
        <li>Spread tomato sauce over the dough.</li>
        <li>Bake for 12-15 minutes until the crust is golden.</li>
      </ol>
      <h5>Unordered List Tag</h5>
      My favorite books (in no particular order)
      <ul id="wd-my-books">
        <li>Dune</li>
        <li>Lord of the Rings</li>
        <li>Ender's Game</li>
        <li>Red Mars</li>
        <li>The Forever War</li>
      </ul>
      Your favorite books (in no particular order)
      <ul id="wd-your-books">
        {/* complete on your own */}
        <li>Harry Potter</li>
        <li>Game of Thrones</li>
        <li>Twilight</li>
        <li>The Hunger Games</li>
      </ul>
    </div>
  );
}
