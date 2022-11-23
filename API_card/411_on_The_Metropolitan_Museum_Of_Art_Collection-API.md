Collected Knowledge & Wisdom on
# The Metropolitian Museum of Art Collection API 
---
## Provides:
* This API provides specific datasets of information on the artworks in the collection for unrestructed commercial and non-commercial work. 
    - no copyright 
    - databases for use in any media without permission or free 
* Provides identification data for works under copyright 
* Dataset provides search, use, and interaction with the dataset *
    - All open-access files and the JPEG files associated with the artworks 

### Examples of usable commands 
- isHighLight 
- isPublicDomain 
- accessionYear
- additionalImages 

### Pain factor: 

Pain level of 3 - There's a lot requests that you have to go through in order to find a specific collection, artist, or work. 
- Each request requires you to choose an object key which is hard to determine to which artwork it corresponds to. 
- Each object key is an integer within a large list 

### Key Provisioning:     
- no requirement for API users to register or obtain API keys 

### Quotas:
- request rate is limited to 80 requests per second 
---

## The Good:
- the documentation is clear - there are examples given and we are shown how the list of Object IDs are structured when the request is run. 
- the user will never have to register an account or obtain any API keys (reduces confusion, etc) 

## The Bad:
- identification numbers are not always unique 

## The Ugly:
- It's really difficult (if not impossible) to find a specific JPEG file
- Object IDs are not sorted in any way (other than numerically - so you can't find files that belong in a specific department, etc)


**Location:** https://metmuseum.github.io/

---

Accurate as of (last update):    2021-11-23

Contributors:

Anna Fang, PD 7  
James Yu, PD 7  