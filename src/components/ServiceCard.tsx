import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  image: string;
  name: string;
  price: string;
  description: string;
  serviceId: string;
  category: string;
}

export const ServiceCard = ({ image, name, price, description, serviceId, category }: ServiceCardProps) => {
  const bookingUrl = `/booking?service=${encodeURIComponent(serviceId)}&category=${encodeURIComponent(category)}`;

  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500">
      {/* Clickable Image */}
      <Link to={bookingUrl} className="block relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          <span className="text-white font-medium text-sm bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full">
            Click to Book
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-heading text-xl font-semibold text-foreground">{name}</h3>
          <span className="text-primary font-semibold whitespace-nowrap">{price}</span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed mb-5">{description}</p>
        <Link to={bookingUrl}>
          <Button variant="blush" size="default" className="w-full">
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
};
