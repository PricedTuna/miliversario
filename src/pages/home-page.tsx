import FoldableComponent from "../components/foldable-component"
import PaperChild from "../components/paper/paper-child-component"
import PaperFatherComponent from "../components/paper/paper-father-component"


function HomePage() {

  return (
    // <PaperFatherComponent>
    //   <PaperChild rotateY={10}>SOY UN PAPER CHILD!</PaperChild>
    //   <PaperChild rotateY={25}>SOY UN PAPER CHILD!</PaperChild>
    //   <PaperChild rotateY={40}>SOY UN PAPER CHILD!</PaperChild>
    //   <PaperChild rotateY={50}>SOY UN PAPER CHILD!</PaperChild>
    //   <PaperChild rotateY={65}>SOY UN PAPER CHILD!</PaperChild>
    //   <PaperChild rotateY={80}>SOY UN PAPER CHILD!</PaperChild>
    //   <PaperChild rotateY={90}>SOY UN PAPER CHILD!</PaperChild>
    // </PaperFatherComponent>

    <FoldableComponent />

  )
}

export default HomePage
