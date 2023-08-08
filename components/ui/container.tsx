interface ContainerProps {
    children: React.ReactNode;
}
  
const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return ( 
      <div className="mx-auto container px-14 md:px-14">
        {/* <div className="mx-auto max-w-7xl"> */}
        {children}
      </div>
    );
};
  
export default Container;