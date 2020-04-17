/*
Crucible
Copyright 2020 Carnegie Mellon University.
NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
Released under a MIT (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
[DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
Carnegie Mellon(R) and CERT(R) are registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.
DM20-0181
*/
/**
 * Alloy API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface ApiError { 
    /**
     * A URI reference [RFC3986] that identifies the problem type. This specification encourages that,   when dereferenced, it provide human-readable documentation for the problem type (e.g., using HTML [W3C.REC-html5-20141028]).    When this member is not present, its value is assumed to be \"about:blank\"
     */
    type?: string;
    /**
     * A short, human-readable summary of the problem type. It SHOULD NOT change from occurrence to occurrence of the  problem, except for purposes of localization(e.g., using proactive content negotiation; see[RFC7231], Section 3.4)
     */
    title?: string;
    /**
     * The HTTP status code ([RFC7231], Section 6) generated by the origin server for this occurrence of the problem.
     */
    status?: number;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     */
    detail?: string;
    /**
     * A URI reference that identifies the specific occurrence of the problem. It may or may not yield further  information if dereferenced.
     */
    instance?: string;
}

