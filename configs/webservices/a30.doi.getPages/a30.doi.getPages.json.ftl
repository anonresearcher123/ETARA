{
    "feed": {
        "entry": {
            "pages": <#if subject.findValue("pagination")??>"${subject.findValue("pagination")?json_string}"<#else>""</#if>
        }
    }
}
