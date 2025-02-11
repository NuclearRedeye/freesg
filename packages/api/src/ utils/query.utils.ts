export const selectAll = 
`SELECT * FROM $1 
 ORDER BY
   CASE
     WHEN char_length($2) = 0
       THEN created_at
   END
 LIMIT
   CASE
     WHEN $4 > 0 
       THEN $4
     END
 OFFSET
   CASE
     WHEN $4 BETWEEN 0 AND 100 AND $3 > 0
       THEN (($3 - 1) * $4)
     ELSE
       100
   END`;