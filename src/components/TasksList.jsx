import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import TaskBlock from "./TaskBlock";

const TasksList = ({ tasks, deleteTask, taskCompleted, ...props }) => {
    return (
        <div>

            <TransitionGroup>

                {[...tasks].map((task) => {

                    return <CSSTransition key={task.id} timeout={500} classNames="task">
                            
                            <TaskBlock 
                                task = { task } 
                                deleteTask = { deleteTask }
                                taskCompleted = { taskCompleted }
                            />
                        
                        </CSSTransition>
                
                })}
            
            </TransitionGroup>

        </div>
    );
};

export default TasksList;
