import React from 'react'
import ProjectsDescription from './ProjectsDescription'
import ProjectsImage from './ProjectsImage'
import ProjectDetails from './styles/Calculator.styled'

const Calculator = (props) => {
    const {projectHead, projectDetails, projectLink, projectImage} = props
    return (
        <ProjectDetails>
            <ProjectsDescription
                projectDetails={projectDetails} 
                projectHead={projectHead}
                projectLink={projectLink}
            />
            <ProjectsImage projectImage={projectImage} projectLink={projectLink}/>
        </ProjectDetails>
    )
}

export default Calculator
