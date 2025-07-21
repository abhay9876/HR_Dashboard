import DepartmentChart from '../components/DepartmentChart';
import BookmarkChart from '../components/BookmarkChart';
import useBookmarkStore from '../store/BookmarkStore';

export default function Analytics() {
  const { bookmarks } = useBookmarkStore(); 
  const departments = ['HR', 'Engineering', 'Marketing'];
  const avgRatings = [4.2, 3.8, 4.5];

  const bookmarkTrends = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    data: [2, 5, 7, 4],
  };

  return (
    <div className="p-6 space-y-6 bg-base-100">
      <h1 className="text-xl font-bold text-base-content">Analytics Overview</h1>

      
      <div className="bg-white p-4 rounded-md shadow-md max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Average Ratings by Department
        </h2>
        <DepartmentChart labels={departments} data={avgRatings} />
      </div>

     
      <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Bookmark Trends (Last 4 Weeks)
        </h2>
        <BookmarkChart labels={bookmarkTrends.labels} data={bookmarkTrends.data} />
      </div>
    </div>
  );
}
