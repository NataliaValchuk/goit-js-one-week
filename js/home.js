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

// const newPost = (post, addedAt = Date()) => {
//   return {
//     ...post,
//     addedAt,
//   }
// };
// const firstPost = {
//   id: 1,
//   author: 'Nataliya',
// };
// const result = newPost(firstPost);
// console.log(result);
{
	/*
	 * Prevents the lightbox from closing when clicking its background.
	 */
	closable: true,
	/*
	 * One or more space separated classes to be added to the basicLightbox element.
	 */
	className: '',
	/*
	 * Function that gets executed before the lightbox will be shown.
	 * Returning false will prevent the lightbox from showing.
	 */
	onShow: (instance) => {},
	/*
	 * Function that gets executed before the lightbox closes.
	 * Returning false will prevent the lightbox from closing.
	 */
	onClose: (instance) => {}
}
$basicLightbox__background: rgba(0, 0, 0, .8); // Background color
$basicLightbox__zIndex: 1000; // Stack order
$basicLightbox__duration: .4s; // Transition duration
$basicLightbox__timing: ease; // Transition timing

@import 'src/styles/main';