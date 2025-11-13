import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router';
import useAxios from '../hooks/useAxios';
import toast from 'react-hot-toast';
import { FiEye } from 'react-icons/fi';


const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState('default');
  const axios = useAxios();

  useEffect(() => {
    document.title = "All Books - The Book Heaven";
  })

  useEffect(() => {
    setLoading(true);
    axios
      .get('/books')
      .then((response) => setBooks(response.data))
      .catch((error) => console.error('Error fetching books:', error))
      .finally(() => setLoading(false));
  }, [axios]);

  const handleSort = async (e) => {
    const value = e.target.value;
    setSort(value);
    try {
      setLoading(true);
      const res = await axios.get(`/books${value === 'default' ? '' : `?sort=${value}`}`);
      setBooks(res.data);
    } catch (error) {
      toast.error('Error sorting books: ' + error.message, { autoClose: 2000 });
    } finally {
      setLoading(false);
    }
  };


  return (
    <section className="my-12 w-full mx-auto px-0 md:px-4">
      <div className="text-center mb-10 ">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary">Our Digital Collection</h2>
        <p className="text-secondary opacity-80 mt-2 text-sm md:text-base">
          Browse, search, and discover your next favorite book from our extensive library.
        </p>
      </div>

      <div className="flex justify-end mb-5">
        <select
          onChange={handleSort}
          name="sort"
          value={sort}
          className="select select-bordered select-sm md:select-md font-medium"
        >
          <option value="default">Sort By Rating</option>
          <option value="rating_asc">Low to High</option>
          <option value="rating_desc">High to Low</option>
        </select>
      </div>

      <div className="rounded-xl shadow-md border border-base-300 overflow-x-auto">
        <table className=" table table-zebra w-full table-auto">
          <thead className="bg-base-200 text-base font-semibold">
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th className='hidden md:flex'>Genre</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              loading ?
                <tr>
                  <td colSpan="5" className="text-center py-6">
                    <span className="loading loading-spinner loading-lg"></span>
                  </td>
                </tr>

                : (
                  books.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="text-center py-6 text-secondary">
                        No books available at the moment.
                      </td>
                    </tr>
                  )
                    :
                    books.map((book) => (
                      <tr key={book._id} className="hover:bg-base-300/40 transition-all">
                        <td className="font-semibold">{book.title}</td>
                        <td>{book.author}</td>
                        <td className='hidden md:flex'>{book.genre}</td>
                        <td>
                          <div className="flex items-center gap-2 justify-center lg:justify-start">
                            <div className='hidden lg:flex items-center gap-1'>
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={16}
                                  fill={i < book.rating ? 'currentColor' : 'none'}
                                  className="text-yellow-400"
                                />
                              ))}
                            </div>
                            <span className="text-sm text-secondary"><span className='hidden lg:inline'>(</span>{book.rating}<span className='hidden lg:inline'>)</span></span>
                          </div>
                        </td>
                        <td className="text-center">
                          <Link
                            to={`/book-details/${book._id}`}
                            className="btn btn-sm btn-primary text-white rounded-lg px-4"
                          >
                            <span className='md:hidden'><FiEye /></span><span className='hidden md:inline-block'>View Details</span>
                          </Link>
                        </td>
                      </tr>
                    )))
            }
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllBooks;
