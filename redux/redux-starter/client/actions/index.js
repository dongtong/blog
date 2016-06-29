// increament
export function increment (index) {
	return {
		type: 'INCREMENT_LIKES',
		index
	};
}

// add comment
export function addComment(photoId, author, comment) {
	return {
		type: 'ADD_COMMENT',
		photoId,
		author,
		comment
	};
}

// remove comment
export function removeComment(photoId, index) {
	return {
		type: 'REMOVE_COMMENT',
		index,
		photoId
	};
}