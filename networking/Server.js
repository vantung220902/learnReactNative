const apiGetAllPost = 'http://192.168.1.10:8080/posts';
async function getAllPost() {
    try {
        const response = await fetch(apiGetAllPost);
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.error(error);
    }
}
async function insertPost(post) {
    try {
        const response = await fetch(apiGetAllPost, {
            method: 'POST',
            body: JSON.stringify({
                title: post.title,
                body: post.body,
                userId: 1,
                img:post.img,
            }),
            headers: { 'Content-Type': 'application/json;charset=UTF-8' }
        });
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.error(error);
    }
}
export { getAllPost, insertPost }