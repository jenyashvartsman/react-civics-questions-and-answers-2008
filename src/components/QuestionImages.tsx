import { Stack, Image } from "react-bootstrap";

interface QuestionImagesProps {
  images: string[];
}

export const QuestionImages = ({ images }: QuestionImagesProps) => {
  return (
    <Stack gap={3} direction="horizontal" className="justify-content-center">
      {images?.map((image, index) => (
        <Image key={index} src={image} width={200} thumbnail />
      ))}
    </Stack>
  );
};

export default QuestionImages;
