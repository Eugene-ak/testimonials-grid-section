type Testimonial = {
  image: string;
  name: string;
  status: string;
  heading: string;
  review: string;
  className: string;
};

export default function Card({
  image,
  name,
  status,
  heading,
  review,
  className
}: Testimonial) {
  return (
    <div className={`card ${className}`}>
      <img src={image} alt="avatar" />
      <p>{name}</p>
      <p>{status}</p>
      <h1>{heading}</h1>
      <p>{review}</p>
    </div>
  );
}
