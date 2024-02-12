import * as Icon from 'react-feather';

type FetherType = {
    iconName: keyof typeof Icon,
    className?: string
}

// iconName props is given name of the icon which is use to get the icon from common featureicons 
// className props give style class for change icon style 

const FeatherIconCom = ({ iconName, className }: FetherType) => {
    const IconComp = Icon[iconName];
    return <IconComp className={className} />;

};

export default FeatherIconCom;