const showPost = (id) => {
    return {
        type: "SHOW_POST",
        payload: id
    }
}

const deletePost = (id) => {
    return {
        type: "DELETE_POST",
        payload: id
    }
}

export { showPost, deletePost }