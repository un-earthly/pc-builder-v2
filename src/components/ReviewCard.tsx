interface Props {
    review: {
        userId: string;
        rating: number;
        comment: string
        date: string
    }
}
const ReviewItem: React.FC<Props> = ({ review }: Props) => {

    function formatDate(dateString: string): string {
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };

        const date = new Date(dateString);

        return new Intl.DateTimeFormat('en-US', options).format(date);
    }
    const { userId, rating, comment, date } = review
    return (
        <div className="flex flex-col gap-4 w-full p-4 border my-5 ">
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <div className="w-7 h-7 text-center rounded-full bg-red-500">{userId.charAt(0)}</div>
                    <span>{userId}</span>
                </div>
                <div className="flex p-1 gap-1 text-orange-300">
                    {Array.from({ length: Math.floor(rating) }).map((_, index) => (
                        <svg
                            key={index} 
                            fill="currentColor"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 text-red-500"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                    ))}
                    {rating % 1 !== 0 && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-half"
                            viewBox="0 0 16 16"
                        >
                            <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                        </svg>
                    )}
                </div>

            </div>

            <div>{comment}</div>
            {formatDate(date)}


        </div>
    );
};
export default ReviewItem