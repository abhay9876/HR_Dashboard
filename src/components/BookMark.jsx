import { Link } from 'react-router-dom';
import useBookmarkStore from '../store/BookmarkStore'; 


 function Bookmark() {
  const { bookmarks } = useBookmarkStore();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Bookmarked Users</h2>

      {bookmarks.length === 0 ? (
        <p className="text-gray-500">No bookmarks yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookmarks.map((user) => (
            <div className="card card-side bg-white text-black shadow-xl">
                
                <div className="card-body">
                    <h2 className="card-title">{user.firstName}{user.lastName}</h2>
                    
                    <div className="card-actions justify-end">
                        <Link to={`/user/${user.id}`}>
                            <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div>
                    
                </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Bookmark