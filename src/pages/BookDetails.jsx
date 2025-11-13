import React, { useEffect, useRef, useState, useContext } from 'react';
import { Star } from 'lucide-react';
import { MdEdit } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useNavigate, useParams } from 'react-router';
import useAxios from '../hooks/useAxios';
import { toast } from 'react-toastify';
import UpdateModal from '../components/UpdateModal';
import NoBookFound from './NoBookFound';
import { AuthContext } from '../contexts/AuthContext';
import Loader from '../components/Loader';
import Swal from 'sweetalert2';

const BookDetails = () => {
    const { user } = useContext(AuthContext);
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState([]);
    const modalRef = useRef(null);
    const { id } = useParams();
    const axios = useAxios();
    const navigate = useNavigate();


    useEffect(() => {
        document.title = "Book Details - The Book Heaven";
    })

    useEffect(() => {
        setLoading(true);
        axios.get(`/books/${id}`)
            .then(response => {
                setBook(response.data);
            })
            .catch(error => {
                toast.error('Error fetching book details: ' + error.message, { autoClose: 2000 });
            })
            .finally(() => setLoading(false));
    }, [axios, id]);

    useEffect(() => {
        console.log('Fetching comments for book id:', id);
        axios.get(`/books/comments/${id}`)
            .then(res => setComments(res.data))
            .catch(err => console.error('Error fetching comments:', err));
    },
        [axios, id]);


    if (loading) return <Loader></Loader>;
    if (!book) return <NoBookFound />;

    const openUpdateModal = () => modalRef.current.showModal();
    const closeUpdateModal = () => modalRef.current.close();

    const handleAddComment = (e) => {
        e.preventDefault();
        const comment = e.target.comment.value;
        if (!comment.trim()) return;

        const newComment = {
            userName: user.displayName,
            photoURL: user.photoURL,
            comment: comment.trim(),
            bookId: id
        };

        console.log(newComment);



        axios.post('/books/comments', newComment)
            .then((response) => {
                toast.success('Comment added!', { autoClose: 1000 });
                newComment._id = response.data.insertedId;
                setComments([newComment, ...comments]);
                e.target.reset();

            })
            .catch(err => toast.error('Failed to add comment: ' + err.message));
    };

    const handleBookDelete = async (bookId) => {
        console.log('Deleting book with id:', bookId);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`/books/${bookId}`)
                    .then(() => {
                        Swal.fire(
                            "Deleted!",
                            "Your book has been deleted.",
                            "success"
                        );
                        navigate('/my-books');
                    })
                    .catch((error) => {
                        Swal.fire(
                            "Error!",
                            "There was an error deleting the book: " + error.message,
                            "error"
                        );
                    });
            }
        });
    };

    return (
        <div className='grid grid-cols-1 md:grid-cols-5 gap-10 my-16 mx-auto max-w-5xl justify-center items-start px-4 md:px-0'>

            <div className='col-span-2 w-full h-full flex justify-center items-start'>
                <img
                    className='w-full min-h-[300px] md:min-h-[450px] max-h-[550px] rounded-lg object-cover shadow-lg'
                    src={book.coverImage}
                    alt={book.title}
                />
            </div>

            <div className='col-span-3 flex flex-col gap-5 py-2'>
                <div className="badge badge-soft badge-error mb-2">{book.genre}</div>
                <h2 className='text-4xl font-bold text-primary mb-1'>{book.title}</h2>
                <h4 className='text-xl text-secondary mb-3'>by {book.author}</h4>

                <div className='flex gap-4 items-center'>
                    <div className="flex items-center gap-1 text-yellow-400">
                        {[0, 1, 2, 3, 4].map(i => (
                            <Star key={i} size={16} fill={book.rating > i ? "currentColor" : "none"} />
                        ))}
                    </div>
                    <span className='text-secondary'>({book.rating} / 5)</span>
                </div>

                <div className='flex flex-col sm:flex-row gap-3 my-3'>
                    <button
                        onClick={openUpdateModal}
                        className='my-button-primary flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2'>
                        <MdEdit /> Edit Details
                    </button>
                    <button onClick={() => handleBookDelete(book._id)} className='my-button-secondary flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2'>
                        <RiDeleteBinLine /> Delete Book
                    </button>
                </div>

                <div className='book-summary'>
                    <h3 className='border-bottom mb-5 pb-2 text-2xl font-bold text-primary'>Summary</h3>
                    <p className='opacity-70 wrap-break-word whitespace-pre-wrap'>{book.summary}</p>
                </div>

                <div className='mt-6'>
                    <h3 className='text-2xl font-bold mb-3 text-primary'>Comments</h3>

                    <form onSubmit={handleAddComment} className='flex flex-col gap-2 mb-5'>
                        <textarea
                            name='comment'
                            className='input h-20 p-2'
                            placeholder='Add a comment...'
                            required
                        />
                        <button type='submit' className='btn btn-primary w-36 self-end'>Post Comment</button>
                    </form>

                    <div className='flex flex-col gap-4'>
                        {comments.length === 0 && <p className='text-gray-500'>No comments yet.</p>}
                        {comments.map(c => (
                            <div key={c._id} className='flex gap-3 items-start bg-base-200 rounded-lg p-3 shadow-sm'>
                                <img src={c.photoURL} alt={c.name} className='w-10 h-10 rounded-full object-cover' />
                                <div>
                                    <h5 className='font-semibold text-primary'>{c.userName}</h5>
                                    <p className='text-secondary'>{c.comment}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Update Modal */}
            <dialog ref={modalRef} className="modal">
                <div className="modal-box w-11/12 max-w-5xl p-0">
                    <UpdateModal book={book} closeUpdateModal={closeUpdateModal} setBook={setBook} />
                </div>
            </dialog>
        </div>
    );
};

export default BookDetails;
