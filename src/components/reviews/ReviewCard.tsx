import type { GuestReview } from "@/content/reviews";

type ReviewCardProps = {
  review: GuestReview;
  originalLanguage: string;
};

export function ReviewCard({ review, originalLanguage }: ReviewCardProps) {
  return <article className="review-card">
    <div className="review-card__rating" aria-label={`${review.rating} em 5 estrelas`}>
      <span aria-hidden="true">★★★★★</span>
      <span className="sr-only">{review.rating} em 5 estrelas</span>
    </div>
    <blockquote>
      <p>“{review.quote}”</p>
      {review.context && <p className="review-card__context">{review.context}</p>}
      <footer>
        <cite>{review.name}</cite>
        <span>{review.source} Review</span>
        {originalLanguage && <small>{originalLanguage}</small>}
      </footer>
    </blockquote>
  </article>;
}
