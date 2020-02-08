SQL> DECLARE
  2    -- Associative array indexed by string:
  3  
  4    TYPE members IS TABLE OF NUMBER  -- Associative array type
  5      INDEX BY VARCHAR2(100;
  6  
  7    church_members  members;        -- Associative array variable
  8    i                VARCHAR2(100);
  9  
 10  BEGIN
 11    -- Add new elements to associative array:
 12  
 13    church_members('Idahp')  := 444,614;
 14    church_members('Arizona') := 750000;
 15    church_members('Utah') := 1000000;
 16  
 17    -- Change value associated with key 'Smallville':
 18  
 19    church_members('Smallville') := 2001;
 20  
 21    -- Print associative array:
 22  
 23    i := church_members.FIRST;
 24  
 25    WHILE i IS NOT NULL LOOP
 26      DBMS_Output.PUT_LINE
 27        ('Population of LDS members in ' || i || ' is ' || TO_CHAR(church_members(i)));
 28      i := church_members.NEXT(i);
 29    END LOOP;
 30  END;
 31  /
Population of LDS members in Idaho is 444,614
Population of LDS members in Arizona is 750000
Population of LDS members in Utah is 2001
 
PL/SQL procedure successfully completed.
 
SQL>