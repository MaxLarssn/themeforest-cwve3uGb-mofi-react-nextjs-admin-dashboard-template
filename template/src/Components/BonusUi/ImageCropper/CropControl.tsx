import { Rotate, Scale } from "@/Constant";
import { ImageLabelProp } from "@/Types/BonusUiType";
import { Button, Input, Label } from "reactstrap";

export const CropControl:React.FC<ImageLabelProp> = ({ onSelectFile, scale, imgSrc, setScale, rotate, setRotate, aspect, handleToggleAspectClick }) => {
  return (
    <div className="Crop-Controls">
      <Input type="file" accept="image/*" onChange={onSelectFile} />
      <div>
        <Label htmlFor="scale-input" className="mt-2">{Scale}:</Label>
        <Input className="mt-1" id="scale-input" type="number" step="0.1" value={scale} disabled={!imgSrc} onChange={(e) => setScale(Number(e.target.value))} />
      </div>
      <div>
        <Label className="mt-2" htmlFor="rotate-input">{Rotate}:</Label>
        <Input className="mt-1" id="rotate-input" type="number" value={rotate} disabled={!imgSrc} onChange={(e) => setRotate(Math.min(180, Math.max(-180, Number(e.target.value))))} />
      </div>
      <div>
        <Button color={aspect ? "success" : "primary"} className="my-3" onClick={handleToggleAspectClick}>Toggle aspect {aspect ? "off" : "on"}</Button>
      </div>
    </div>
  );
};
