| INFO PROPERTY | VALUE                                                     |
| ------------- | --------------------------------------------------------- |
| Program Type  | Script                                                    |
| Program Name  | **Convert Google Maps Shortlinks to Geocode Coordinates** |
| Main Language | Google Apps Script (JavaScript)                           |
| File Name     | README.md                                                 |
| Date Created  | 10/04/23                                                  |
| Date Modified | --                                                        |
| Version       | 0.1.00                                                    |
| Programmer    | **Eric Hepperle**                                         |

### TECHNOLOGIES

<img align="left" alt="Google Apps Script" title="Google Apps Script" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" style="padding-right:10px;" />

<img align="left" alt="JavaScript" title="JavaScript" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" style="padding-right:10px;" />

<img align="left" alt="Git" title="Git" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" style="padding-right:10px;" />

<img align="left" alt="GitHub" title="GitHub" width="26px" src="https://user-images.githubusercontent.com/3369400/139448065-39a229ba-4b06-434b-bc67-616e2ed80c8f.png" style="padding-right:10px;" />

<br>

## TAGS
`Google Apps Script` `Google Sheets` `JavaScript`

## Purpose

This script takes a google maps shortlink, expands it to a normal long URL with un-encoded parameters, then parses out and returns the latitude, longitude coordinates. This is useful especially for batch importing location pins into Google MyMaps and other geocoding and mapping applications.
    
## Usage

### Add Google Apps Script

1. Start with a Google Sheet that has one column of short urls
2. Open "Extensions" in the main top menu > Apps Script
3. Create a new script named "Expand Short URLs to coordinates"
4. Copy the contents of app.js and paste over top of any default code in the new Google Apps script
5. Save the script

### Expand the Shortlinks

6. Create a helper column to right of "Short URL" column called "Expanded URL". Lets say the first cell in the Short URL col is "H2" and the "Expanded URL" first cell is "I2".
7. Type this in I2:  `=ExpandUrl(H2)`
8. Select I2 and FILL DOWN the rest of the col with CTRL+D
9. Now you will have all the exanded urls and you can see that the lat,long values are encoded into each near the front

### Parse Coordinates from Expanded URLs

10. Create a new helper col named "Expanded URL Value" in J
11. Copy all values from col I and paste special as "Values Only" into col J. This may not be necessary -- _further testing needed_ **#GOTCHA**
12. Create a new col named "Coords String" in col K
13. Type this in K2: `=ParseCoords(J2)` and then fill down for all values
14. Now you should have all the coordinate pair strings like this `0.418529,32.428218`
15. These _may_ need to be parsed into separate columns (delimited by the comma) ... need to test that 

## Requires

* A google sheet with one column of google maps shortlinks, commonly following this format: `https://maps.google.com/?q=0.344843,32.943700&entry=gps&shorturl=1`
    

## Future

- [ ] Determine whether splitting coordinates string into latitude and longitude columns is necessary for import into **Google MyMaps**
### Materials/References

- https://actualwizard.com/javascript-string-indexof-method-explained
- https://stackoverflow.com/questions/28404663/how-to-get-the-text-from-a-google-spreadsheet-cell
- https://stackoverflow.com/questions/76422141/google-sheets-get-formula-calculated-values-of-the-cell
- https://stackoverflow.com/questions/54678304/how-to-get-value-from-a-cell-with-formula
- https://stackoverflow.com/questions/34691425/difference-between-getvalue-and-getdisplayvalue-on-google-app-script
