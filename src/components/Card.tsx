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
  className,
}: Testimonial) {
  return (
    <section className={`card ${className}`}>
      <div>
        <img src={image} alt="avatar" />
        <p>{name}</p>
        <p>{status}</p>
      </div>
      <h1>{heading}</h1>
      <article>{review}</article>
    </section>
  );
}
