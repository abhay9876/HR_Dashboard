import { Link } from 'react-router-dom'
import useBookmarkStore from '../store/BookmarkStore';
function UserCards({ user }) {
    const { bookmarks, toggleBookmark } = useBookmarkStore();
  const isBookmarked = bookmarks.some((u) => u.id === user.id);
    return (
        <>
            <div className="card card-side bg-base-100 text-base-content shadow-xl">
                <figure>
                    <img
                        src={user.image}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{user.firstName}{user.lastName}</h2>
                    <p>{user.address.country}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/user/${user.id}`}>
                            <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div>
                    <button
                        className={`btn mt-2 ${isBookmarked ? 'btn-success' : 'btn-outline'}`}
                        
                        onClick={() => toggleBookmark(user)}
                    >
                        {isBookmarked ? 'Bookmarked' : 'Bookmark'}
                    </button>
                </div>
            </div>
        </>
    )
}


export default UserCards