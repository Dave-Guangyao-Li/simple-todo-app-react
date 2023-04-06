# Styling

## why set height to be 100 vh

- Setting the `height` of the `body` element to `100vh` makes sure that the `body` element takes up the full height of the viewport, which is the visible area of the web page. This is necessary for vertical centering to work properly.
- When we use `display: flex` on the `body` element, it becomes a flex container that can align its child elements both horizontally and vertically. By default, the height of a flex container is determined by the height of its child elements. However, when we want to center the child element vertically, we need the parent element to have a defined height. Setting the `height` of the `body` element to `100vh` ensures that it takes up the full height of the viewport, providing a fixed height for the flex container.
- Without a fixed height on the flex container, the vertical centering may not work as expected. This is because the height of the flex container will be determined by the height of its child elements, and it may not be tall enough to center the child element vertically.
