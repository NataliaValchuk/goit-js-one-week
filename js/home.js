// const newPost = (post, addedAt = Date()) => ({
//   ...post,
//   addedAt,
// });
// const firstPost = {
//   id: 1,
//   author: 'Nataliya',
// };
// newPost(firstPost);
// const result = newPost(firstPost);
// console.log(result);

const newPost = (post, addedAt = Date()) => {
  return {
    ...post,
    addedAt,
  }
};
const firstPost = {
  id: 1,
  author: 'Nataliya',
};
const result = newPost(firstPost);
console.log(result);
