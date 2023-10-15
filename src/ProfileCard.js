//use destructuring in argument
function ProfileCard({title, handle, image, alt}) {
    return (
        <div>
            <div>Title is {title}</div>
            <div>Handle is {handle}</div>
            <img src={image} alt={alt}/>
        </div>
    );
}

export default ProfileCard;