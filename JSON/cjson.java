
// cJSON structure
void parse_object(cJSON *root)
{
  cJSON* name = NULL;
  cJSON* index = NULL;
  cJSON* optional = NULL;

  int i;

  cJSON *item = cJSON_GetObjectItem(items,"items");
  for (i = 0 ; i < cJSON_GetArraySize(item) ; i++)
  {
     cJSON * subitem = cJSON_GetArrayItem(item, i);
     name = cJSON_GetObjectItem(subitem, "name");
     index = cJSON_GetObjectItem(subitem, "index");
     optional = cJSON_GetObjectItem(subitem, "optional"); 
  }
}

//call the function
request_json = cJSON_Parse(request_body);
parse_object(request_json);