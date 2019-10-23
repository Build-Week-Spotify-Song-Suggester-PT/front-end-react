import React from "react";


function SongCard( {song} ) {
    return (
        <

        <Table>
       
        <TableBody>
          <TableRow>
            <TableCell scope="row">
              <strong>{song.track_name}</strong>
            </TableCell>
            <TableCell>Coconut</TableCell>
          </TableRow>
          
        </TableBody>
      </Table>
    )
}

export default SongCard;