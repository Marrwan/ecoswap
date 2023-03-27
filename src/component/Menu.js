import React from 'react';
import {Toolbar, Link} from '@mui/material';


export default function Menu(props) {
    const sections = [{title:'All'}, {title: 'Art'}, {title: 'Gaming'}, {title: 'Membership'}];
    return (
    <Toolbar
    component="nav"
    variant="dense"
    sx={{ justifyContent: 'start', overflowX: 'auto', mt:3, mb:3 }}
  >
    {sections.map((section) => (
      <Link
        noWrap
        key={section.title}
        variant="body2"
        href={section.url}
        sx={{ mr: 3, flexShrink: 0, color: 'black', fontWeight: 600, fontFamily:'Poppins'}}
        underline="none"
      >
        {section.title}
      </Link>
    ))}
  </Toolbar>
    )
}