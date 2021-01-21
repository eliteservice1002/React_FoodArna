import React from 'react';

// function createMarkup() {
//   return {__html: 'First &middot; Second'};
// }

export default function MyComponent(props) {
    return <div dangerouslySetInnerHTML={{ __html: props.code }} />;
}