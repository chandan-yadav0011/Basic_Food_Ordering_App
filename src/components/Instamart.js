// import { use, useState } from "react"


// const Section = ({title,description,isVisible,setIsVisible})=>{

//     //const[isVisible, setIsVisible]= useState(isVisible);

    
//     return (
//         <div className="border-2 my-3">
//             <h2 className="text-xl font-bold p-2 ">{title}</h2>

//             {
//                 (isVisible )?<button className="p-2 cursor-pointer underline" onClick={()=>setIsVisible() }>hide</button>
//                 : <button className="p-2 cursor-pointer  underline" onClick={()=>setIsVisible()}>show</button>

//             }
            
//             {
//                 (isVisible )&& <p className="p-2">{description}</p>
//             }
            
          
           
//         </div>
//     );
// }

// const Instamart=()=>{

//     const [sectionConfig, setSectionConfig]= useState({
//         showAbout:false,
//         showTeam:false,
//         showProduct:false,
//         showCareer:false,
//     })

//     return (
//         <div className="p-2 m-2">
//             {/* <AboutInstamart/>
//             <TeamInstamart/>
//             <Products/>
//             <CareersInstamart/>
//              */}

//             <h1 className="font-bold text-3xl my-5 ">Instamart</h1>
             
//             <Section 
//                 title={"About Instamart"}
//                 isVisible={sectionConfig.showAbout}
//                 setIsVisible={()=>setSectionConfig({
//                     showAbout:true,
//                     showTeam:false,
//                     showProduct:false,
//                     showCareer:false,
//                 })}
//                 description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."}/>
            
//             <Section 
//                 title={"Team Instamart"}
//                 isVisible={sectionConfig.showTeam} 
//                 setIsVisible={()=>setSectionConfig({
//                     showAbout:false,
//                     showTeam:true,
//                     showProduct:false,
//                     showCareer:false,
//                 })}
//                 description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."}/>
            
//             <Section 
//                 title={"Products Instamart"} 
//                 isVisible={sectionConfig.showProduct}
//                 setIsVisible={()=>setSectionConfig({
//                     showAbout:false,
//                     showTeam:false,
//                     showProduct:true,
//                     showCareer:false,
//                 })}
//                description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."}/>
            
//             <Section 
//                 title={"Careers Instamart"} 
//                 isVisible={sectionConfig.showCareer}
//                 setIsVisible={()=>setSectionConfig({
//                     showAbout:false,
//                     showTeam:false,
//                     showProduct:false,
//                     showCareer:true,
//                 })}
//                 description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."}/>

//         </div>
//     )
// }

// export default Instamart;



import {useState } from "react"


const Section = ({title,description,isVisible,setIsVisible})=>{

    //const[isVisible, setIsVisible]= useState(isVisible);
    const[dummy,setDummy]= useState(true);
    
    return (
        <div className="border-2 my-3">
            <h2 className="text-xl font-bold p-2 ">{title}</h2>

            {
                (isVisible&&dummy)?<button className="p-2 cursor-pointer underline" onClick={()=>{setIsVisible();setDummy(false)}}>hide</button>
                : <button className="p-2 cursor-pointer  underline" onClick={()=>{setIsVisible();setDummy(true)}}>show</button>

            }
            
            {
                (isVisible &&dummy)&& <p className="p-2">{description}</p>
            }
            
          
           
        </div>
    );
}

const Instamart=()=>{

    const [sectionConfig, setSectionConfig]= useState({
       key:""
    })

    return (
        <div className="p-2 m-2">
            {/* <AboutInstamart/>
            <TeamInstamart/>
            <Products/>
            <CareersInstamart/>
             */}

            <h1 className="font-bold text-3xl my-5 ">Instamart</h1>
             
            <Section 
                title={"About Instamart"}
               
                isVisible={sectionConfig.key==="1"}
               
                setIsVisible={()=>setSectionConfig({
                   key:"1",
                })}
                description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."}/>
            
            <Section 
                title={"Team Instamart"}
                isVisible={sectionConfig.key==="2"} 
              
                setIsVisible={()=>setSectionConfig({
                    key:"2",
                })}
                description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."}/>
            
            <Section 
                title={"Products Instamart"} 
                isVisible={sectionConfig.key==="3"}
                setIsVisible={()=>setSectionConfig({
                   key:"3",
                })}
                description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."}/>
            
            <Section 
                title={"Careers Instamart"} 
                isVisible={sectionConfig.key==="4"}
                setIsVisible={()=>setSectionConfig({
                    key:"4",
                })}
                description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."}/>

        </div>
    )
}

export default Instamart;