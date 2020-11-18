import React from 'react';

import { ViewSpecificPostComponent } from './viewPost/viewSpecificPostComponent';

export const Search: React.FC = () => {
    return(
        <div>

        <ViewSpecificPostComponent username = {sessionStorage.getItem("search") || ""}/>
           
            
        </div>
    )
}